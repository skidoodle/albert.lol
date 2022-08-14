export const Loading = () => {
    return(
        <div className='fixed h-[85vh] w-screen flex justify-center items-center'>
            <div className='animate-spin w-16 h-16 border-4 border-t-transparent border-l-transparent border-r-black border-b-black dark:border-r-white dark:border-b-white rounded-full' role='status' />
        </div>
    )
}