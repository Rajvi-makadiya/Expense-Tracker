import React from 'react'

const Modal = ({ children, isOpen, onClose, title}) => {

    if(!isOpen) return null

  return (
    <div className='fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-[calc(100%-1rem)] max-h-full overflow-y-auto overflow-x-hidden bg-black/20 bg-opacity-50'>
      <div className='relative p-4 w-full max-w-2xl max-h-full'>
        {/* Modal content*/}
        <div className='relative rounded-lg shadow-sm bg-white'>
            {/* modal header*/}
            <div className='flex items-center justify-between p-4 md:p-5 border-b rounded-t border-gray-200'>
                <h3 className='text-lg font-medium text-gray-900 '>
                    {title}
                </h3>

                <button 
                type='button'
                className='text-gray-400 bg-transparent hover:bg-gray-200 hover:tet-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center cursor-pointer'
                onClick={onClose} >
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 24 24">
                        <path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z"></path>
                    </svg>
                </button>
            </div>
            {/* modal body*/}
            <div className='p-4 md:p-5 space-y-4'>
                {children}
            </div>
        </div>
      </div>
    </div>
  )
};

export default Modal;
