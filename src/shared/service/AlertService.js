import Swal from 'sweetalert2';

class AlertService {
  constructor() {
    this.toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
    });

    this.modal = Swal.mixin({
      allowOutsideClick: false,
      showConfirmButton: true,
    });
  }

  success(message) {
    return this.toast.fire({
      icon: 'success',
      title: message,
    });
  }

  error(message) {
    return this.toast.fire({
      icon: 'error',
      title: message,
      timer: 5000,
    });
  }

  warning(message) {
    return this.toast.fire({
      icon: 'warning',
      title: message,
    });
  }

  info(message) {
    return this.toast.fire({
      icon: 'info',
      title: message,
    });
  }

  loading(message = 'Please wait...') {
    return this.modal.fire({
      title: message,
      didOpen: () => {
        Swal.showLoading();
      },
      showConfirmButton: false,
    });
  }

  confirm(options) {
    return this.modal.fire({
      title: options.title,
      text: options.text,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: options.confirmButtonText || 'Yes',
      cancelButtonText: options.cancelButtonText || 'No',
      reverseButtons: true,
      customClass: {
        confirmButton:
          options.confirmButtonClass ||
          'bg-buttonBlue text-white px-6 py-2 rounded-md text-m mr-4 w-auto',
        cancelButton:
          options.cancelButtonClass ||
          'bg-white border border-gray-400 text-gray-800 px-6 py-2 rounded-md text-m w-auto',
      },
    });
  }
}

export default new AlertService();