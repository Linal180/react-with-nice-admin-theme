
export const Alert = ({ type = 'success', message }) =>
  <div class={`alert alert-${type} bg-${type} text-light border-0 alert-dismissible fade show`} role="alert">
    {message}
    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>
