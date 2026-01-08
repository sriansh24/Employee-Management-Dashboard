import React from 'react';
import "../../assets/styles/EmdFilters/emdfilters.css"

const EmployeeFilter = ({
    searchTerm,
    onSearchChange,
    genderFilter,
    onGenderChange,
    statusFilter,
    onStatusChange,
    onClear,
}) => {
    return (
        <div className="row g-3">
            {/* Search */}
            <div className="col-md-4">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search by name..."
                    value={searchTerm}
                    onChange={(e) => onSearchChange(e.target.value)}
                />
            </div>
            {/* Gender Filter */}
            <div className="col-md-3 hand-pointer">
                <select
                    name="gender"
                    id="gender"
                    className="form-select"
                    value={genderFilter}
                    onChange={(e) => onGenderChange(e.target.value)}
                >
                    <option value="">All Genders</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                </select>
            </div>
            {/* Status Filter */}
            <div className="col-md-3 hand-pointer">
                <select
                    name="status"
                    id="status"
                    className="form-select"
                    value={statusFilter}
                    onChange={(e) => onStatusChange(e.target.value)}
                >
                    <option value="">All Status</option>
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                </select>
            </div>
            {/* Clear */}
            <div className="col-md-2 d-grid">
                <button className="btn btn-outline-secondary" onClick={onClear}>Clear</button>
            </div>
        </div>
    );
};

export default EmployeeFilter;
