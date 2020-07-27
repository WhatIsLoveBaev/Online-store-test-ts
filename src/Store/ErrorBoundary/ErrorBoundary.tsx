import React, { Component } from 'react'
import ErrorMessage from './ErrorMessage'

interface ErrorStateType {
    hasError: boolean,
    error: string,
    info: infoType
}

type infoType = {
    componentStack?: string
}


class ErrorBoundary extends Component<{}, ErrorStateType> {

    state = {
        hasError: false,
        error: '',
        info: {}
    }

    static getDerivedStateFromError(): object {
        return {
            hasError: true
        }
    }

    componentDidCatch(error: any, info: any): void {
        this.setState({ hasError: true, error: error, info: info });
      }

    render() {
        if (this.state.hasError) return <ErrorMessage info={this.state.info} />
        
        return this.props.children
    }
}

export default ErrorBoundary