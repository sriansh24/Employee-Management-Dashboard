const EmployeeTable = ({ employees, onToggleStatus, onDelete, onEdit }) => {
    return (
        <div className="print-area">
            <div className="card shadow-sm border-0">
                <div className="card-body">
                    <h5 className="card-title">Employee List</h5>
                    {employees.length === 0 ? (
                        <p className="text-muted text-center">No employees found.</p>
                    ) : (
                        <div className="table-responsive">
                            <table className="table table-hover align-middle text-nowrap">
                                <thead className="table-light">
                                    <tr>
                                        <th>Employee ID</th>
                                        <th>Image</th>
                                        <th>Full Name</th>
                                        <th>Gender</th>
                                        <th>Date of Birth</th>
                                        <th>State</th>
                                        <th>City</th>
                                        <th>Status</th>
                                        <th className="text-center">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {employees.map((emp) => (
                                        <tr key={emp.id}>
                                            <td>{emp.id}</td>
                                            <td>
                                                <img src={emp.image}
                                                    alt={emp.full_name}
                                                    width="40"
                                                    height="40"
                                                    className="rounded-circle"
                                                />
                                            </td>
                                            <td>{emp.full_name}</td>
                                            <td>{emp.gender}</td>
                                            <td>{emp.dob}</td>
                                            <td>{emp.state}</td>
                                            <td>{emp.city}</td>
                                            <td>
                                                <div className="form-check form-switch">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        checked={emp.isActive}
                                                        onChange={() => onToggleStatus(emp.id)}
                                                    />
                                                    <label className="form-check-label">
                                                        {emp.isActive ? "Active" : "Inactive"}
                                                    </label>
                                                </div>
                                            </td>
                                            <td className="text-center">
                                                <button
                                                    className="btn btn-sm btn-outline-primary me-2"
                                                    onClick={() => onEdit(emp)}
                                                >
                                                    Edit
                                                </button>
                                                <button
                                                    className="btn btn-sm btn-outline-danger me-2"
                                                    onClick={() => onDelete(emp.id)}
                                                >
                                                    Delete
                                                </button>
                                                <button
                                                    className="btn btn-sm btn-outline-secondary"
                                                    onClick={() => window.print()}
                                                >
                                                    Print
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
export default EmployeeTable;