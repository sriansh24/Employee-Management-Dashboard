const DashboardCards = ({ total, active, inactive }) => {
    return (
        <div className=" row row-cols-1 row-cols-md-3 g-3 mb-4">
            <div className="col">
                <div className="card shadow border-0 px-0">
                    <div className="card-body text-center">
                        <h6 className="text-muted">Total Employee</h6>
                        <h2 className="fw-bold">{total}</h2>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card shadow border-0 px-0">
                    <div className="card-body text-center">
                        <h6 className="text-muted">Active Employee</h6>
                        <h2 className="fw-bold text-success">{active}</h2>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card shadow border-0 px-0">
                    <div className="card-body text-center">
                        <h6 className="text-muted">Inactive Employee</h6>
                        <h2 className="fw-bold text-danger">{inactive}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default DashboardCards;