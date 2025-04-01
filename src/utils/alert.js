import { useTheme } from 'next-themes';
import Swal from 'sweetalert2'

export const alert = (icon, title, text, timer = 1500, theme = "light") => {

    Swal.fire({
        icon: icon,
        title: title,
        text: text,
        timer: timer,
        showConfirmButton: false,
        theme: theme || 'light'
    })
}

export const confirm = ({ icon, title, text, confirmButtonText, cancelButtonText, theme = "light" }) => {
    return Swal.fire({
        icon: icon,
        title: title,
        text: text,
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: confirmButtonText,
        cancelButtonText: cancelButtonText,
        theme: theme || 'light'
    })
}
