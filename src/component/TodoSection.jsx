import React from 'react';

function TodoSection({ children, typeCollapse, label, parent }) {
  return (
    <section className="accordion-item shadow">
      <h4 className="accordion-header">
        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={"#" + typeCollapse} aria-expanded="true" aria-controls={typeCollapse}>
          {label}
        </button>
      </h4>
      <div className="accordion-collapse collapse show" id={typeCollapse} data-bs-parent={parent}>
        <div className="accordion-body card card-body">
          <ul>{children}</ul>
        </div>
      </div>
    </section>
  )
}

export default TodoSection;