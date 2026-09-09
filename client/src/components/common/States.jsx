export function LoadingState({label='Loading leads…'}){return <div className="state loading">{label}</div>}
export function EmptyState({children}){return <div className="state empty">{children}</div>}
export function ErrorState({children}){return <div className="state error">{children}</div>}
