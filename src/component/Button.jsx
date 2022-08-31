import React from 'react'

export function Complete(props) {
  return (
    <button className="btn btn-primary" onClick={props.toggle}>
      Kembalikan
      <i className="fas fa-undo ms-2"></i>
    </button>
  )
}

export function Uncomplete(props) {
  return (
    <button className="btn btn-success" onClick={props.toggle}>
      Tandai Selesai
      <i className="fas fa-check ms-2"></i>
    </button>
  )
}

export function Edit(props) {
  return (
    <button className="btn btn-warning" onClick={props.edit}>
      Edit
      <i className="fas fa-edit ms-2"></i>
    </button>
  )
}

export function Delete(props) {
  return (
    <button className="btn btn-danger" onClick={props.delete}>
      Hapus
      <i className="fas fa-trash-alt ms-2"></i>
    </button>
  )
}