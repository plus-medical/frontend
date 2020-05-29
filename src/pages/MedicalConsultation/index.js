import React from 'react'
import './style.scss'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

export default function MedicalConsultation () {
  const { handleSubmit, register, errors } = useForm()
  const onSubmit = values => console.log(values)

  return (
    <form
      className='MedicalConsultation form-section'
      onSubmit={handleSubmit(onSubmit)}
    >
      <label className='MedicalConsultation__item'>Consulta</label>
      <input
        type='text'
        placeholder='Razón de la consulta'
        aria-label='Razón de la consulta'
        className='form-input'
        name='consultation_reason'
        ref={register({ required: true })}
      />
      {errors.reason_for_consultation && <span>Campo requerido</span>}

      <input
        type='text'
        placeholder='Exploración'
        aria-label='Exploración'
        className='form-input'
        name='consultation_exploration'
        ref={register({ required: true })}
      />
      {errors.exploration && <span>Campo requerido</span>}

      <input
        type='text'
        placeholder='Análisis'
        aria-label='Análisis'
        className='form-input'
        name='consultation_analysis'
        ref={register({ required: true })}
      />
      {errors.analysis && <span>Campo requerido</span>}

      <input
        type='text'
        placeholder='Diagnóstico'
        aria-label='Diagnóstico'
        className='form-input'
        name='consultation_diagnosis'
        ref={register({ required: true })}
      />
      {errors.diagnosis && <span>Campo requerido</span>}

      <input
        type='text'
        placeholder='Evolución'
        aria-label='Evolución'
        className='form-input'
        name='consultation_evolution'
        ref={register({ required: true })}
      />
      {errors.evolution && <span>Campo requerido</span>}

      <input
        type='text'
        placeholder='Orden Médica'
        aria-label='Orden Médica'
        className='form-input'
        name='consultation_medicalorder'
        ref={register({ required: true })}
      />
      {errors.medical_order && <span>Campo requerido</span>}

      <input
        type='text'
        placeholder='Farmacología'
        aria-label='Farmacología'
        className='form-input'
        name='consultation_pharmacology'
        ref={register({ required: true })}
      />
      {errors.pharmacology && <span>Campo requerido</span>}

      <input
        type='search'
        placeholder='Busqueda de Exámenes'
        aria-label='Busqueda de Exámenes'
        className='form-input'
        name='consultation_examination'
        ref={register}
      />

      <div className='form-section__buttons'>
        <Link to='/'>
          <button className='form-button secondary'>Cancelar </button>
        </Link>
        <button submit='true' className='form-button primary'>Guardar</button>
      </div>
    </form>
  )
}
