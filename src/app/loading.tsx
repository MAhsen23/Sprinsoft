import React from 'react'
import styles from '@/app/styles/loading.module.css'

const loading = () => {
    return (
        <main className='items-center flex flex-col justify-center min-h-screen'>
            <div className={styles['lds-ellipsis']}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </main>
    )
}

export default loading