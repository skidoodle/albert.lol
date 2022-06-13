import toast, { Toaster } from 'react-hot-toast';
import copy from 'copy-to-clipboard'

const Icon = ({icon, reference, copy = false} : {icon: any, reference: any, copy?: boolean}) => {
    return(
        <>
            { 
                copy ? (
                    <a href='javascript:void(0)' onClick={() => doThings(reference)}>
                        {icon}
                    </a>
                ) : (
                    <a href={reference} target='_blank' rel='noopener noreferrer' aria-label="Icon">
                        {icon}
                    </a>
                )
            }
            <Toaster position='bottom-center' reverseOrder={false} />
        </>
    )
}

const doThings = (value: any) => {
    copy(value)
    toast.remove()
    toast.success('Successfully copied to clipboard', {
        style: {
            background: '#111',
            color: '#fff',
            fontSize: '1.1rem'
        }
    })
}

export default Icon
