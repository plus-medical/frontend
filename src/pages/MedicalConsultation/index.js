import React from 'react'
import './style.scss'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

export default function MedicalConsultation () {
  const { handleSubmit, register, errors } = useForm()
  const onSubmit = values => console.log(values)

  return (
    <form
      className='MedicalConsultation'
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className='MedicalConsultation__title'>Consulta Médica</div>
      <div className='form-group'>
        <div className='form-label'>Motivo de la consulta</div>
        <input
          type='text'
          aria-label='Razón de la consulta'
          className='MedicalConsultation_textarea'
          name='consultation_reason'
          ref={register({ required: true })}
        />
        {errors.reason_for_consultation && <span>Campo requerido</span>}
      </div>
      <div className='form-group'>
        <div className='form-label'>Exploración</div>
        <input
          type='text'
          aria-label='Exploración'
          className='MedicalConsultation_textarea'
          name='consultation_exploration'
          ref={register({ required: true })}
        />
        {errors.exploration && <span>Campo requerido</span>}
      </div>
      <div className='form-group'>
        <div className='form-label'>Análisis</div>
        <input
          type='text'
          aria-label='Análisis'
          className='MedicalConsultation_textarea'
          name='consultation_analysis'
          ref={register({ required: true })}
        />
        {errors.analysis && <span>Campo requerido</span>}
      </div>
      <div className='form-group'>
        <div className='form-label'>Diagnóstico</div>
        <input
          type='text'
          aria-label='Diagnóstico'
          className='MedicalConsultation_textarea'
          name='consultation_diagnosis'
          ref={register({ required: true })}
        />
        {errors.diagnosis && <span>Campo requerido</span>}
      </div>
      <div className='form-group'>
        <div className='form-label'>Evolución</div>
        <input
          type='text'
          aria-label='Evolución'
          className='MedicalConsultation_textarea'
          name='consultation_evolution'
          ref={register({ required: true })}
        />
        {errors.evolution && <span>Campo requerido</span>}
      </div>
      <div className='form-group'>
        <div className='form-label'>Orden Médica</div>
        <input
          type='text'
          aria-label='Orden Médica'
          className='MedicalConsultation_textarea'
          name='consultation_medicalorder'
          ref={register({ required: true })}
        />
        {errors.medical_order && <span>Campo requerido</span>}
      </div>
      <div className='form-group'>
        <div className='form-label'>Farmacología</div>
        <input
          type='text'
          aria-label='Farmacología'
          className='MedicalConsultation_textarea'
          name='consultation_pharmacology'
          ref={register({ required: true })}
        />
        {errors.pharmacology && <span>Campo requerido</span>}
      </div>
      <div className='form-group'>
        <div className='form-label'>Exámenes</div>
      </div>

      <div className='form-section__buttons'>
        <Link to='/'>
          <button className='form-button secondary'>Cancelar </button>
        </Link>
        <button submit='true' className='form-button primary'>Guardar</button>
      </div>
    </form>
  )
}
