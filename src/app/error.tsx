'use client'

const ErrorBoundary = ({ error }) => {
    console.log(error)

    return <div>Error</div>
}
export default ErrorBoundary
