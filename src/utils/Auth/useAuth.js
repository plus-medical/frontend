import { useState } from 'react'

const apiUrl = process.env.BASE_URL

export function useAuth () {
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function signIn (data) {
    try {
      setLoading(true)
      setError('')
      setData({})
      const headers = { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
      const body = JSON.stringify(data)
      const response = await window.fetch(apiUrl + 'signin', {
        method: 'POST',
        headers,
        body,
        credentials: 'include'
      })
      if (response.ok) {
        const result = await response.json()
        setData(result.data)
        setError('')
      } else {
        setError(response.statusText ? response.statusText : `Error status:  ${response.status}`)
      }
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  async function signUp (data) {
    try {
      setLoading(true)
      setError('')
      setData({})
      const headers = { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
      const body = JSON.stringify(data)
      const response = await window.fetch(apiUrl + 'users', {
        method: 'POST',
        headers,
        body,
        credentials: 'include'
      })
      const result = await response.json()
      if (response.ok) {
        setData(result)
        setError('')
        return ('success')
      } else {
        setError(response.statusText)
        return ('error:', error)
      }
    } catch (error) {
      setError(error.message)
      return ('error:', error)
    } finally {
      setLoading(false)
    }
  }

  async function logout () {
    try {
      setLoading(true)
      setError('')
      setData({})
      const headers = { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }

      const response = await window.fetch(apiUrl + 'logout', {
        method: 'POST',
        headers,
        credentials: 'include'
      })
      if (response.ok) {
        setData({})
        setError('')
      } else {
        setError(response.statusText)
      }
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  return {
    data,
    setData,
    loading,
    setLoading,
    error,
    setError,
    signIn,
    signUp,
    logout
  }
}
