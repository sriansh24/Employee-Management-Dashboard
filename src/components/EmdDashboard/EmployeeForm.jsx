import React, { useState, useEffect } from 'react';

const EmployeeForm = ({ show, onClose, onSave, editEmployee }) => {
    const isEditMode = Boolean(editEmployee);

    const defaultFormState = {
        full_name: "",
        gender: "",
        dob: "",
        state: "",
        city: "",
        isActive: true,
        image: "",
    };

    const [formData, setFormData] = useState(defaultFormState);

    const [preview, setPreview] = useState("");
    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (editEmployee) {
            setFormData({
                ...defaultFormState,
                ...editEmployee,
            });
            setPreview(editEmployee.image || "");
        }
    }, [editEmployee]);

    const validate = () => {
        const newErrors = {};
        if (!formData.full_name.trim()) newErrors.full_name = "Name is required";
        if (!formData.gender) newErrors.gender = "Gender is required";
        if (!formData.dob) newErrors.dob = "Date of Birth is required";
        if (!formData.state.trim()) newErrors.state = "State is required";
        if (!formData.city.trim()) newErrors.city = "City is required";
        if (!formData.image && !isEditMode) {newErrors.image = "Image is required";}
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const imageUrl = URL.createObjectURL(file);
        setFormData({ ...formData, image: imageUrl });
        setPreview(imageUrl);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validate()) return;
        onSave(formData);
        onClose();
    }

    if (!show) return null;

    return (
        <div className="modal fade show d-block" tabIndex="-1">
            <div className="modal-dialog modal-lg modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">
                            {isEditMode ? "Edit Employee" : "Add Employee"}
                        </h5>
                        <button type="button" className="btn-close" onClick={onClose}></button>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="modal-body">
                            {/* Full Name */}
                            <div className="mb-3">
                                <label htmlFor="full_name" className='form-label'>Full Name</label>
                                <input
                                    type="text"
                                    id="full_name"
                                    className={`form-control ${errors.full_name ? "is-invalid" : ""}`}
                                    value={formData.full_name}
                                    onChange={(e) =>
                                        setFormData({ ...formData, full_name: e.target.value })
                                    }
                                />
                                <div className="invalid-feedback">{errors.full_name}</div>
                            </div>
                            {/* Gender */}
                            <div className="mb-3">
                                <label htmlFor="gender" className='form-label'>Gender</label>
                                <select
                                    name="gender"
                                    id="gender"
                                    className={`form-select ${errors.gender ? "is-invalid" : ""}`}
                                    value={formData.gender}
                                    onChange={(e) =>
                                        setFormData({ ...formData, gender: e.target.value })
                                    }
                                >
                                    <option value="">Select Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </select>
                                <div className="invalid-feedback">{errors.gender}</div>
                            </div>
                            {/* DOB */}
                            <div className="mb-3">
                                <label htmlFor="dob" className='form-label'>Date of Birth</label>
                                <input
                                    type="date"
                                    id="dob"
                                    className={`form-control ${errors.dob ? "is-invalid" : ""}`}
                                    value={formData.dob}
                                    onChange={(e) =>
                                        setFormData({ ...formData, dob: e.target.value })
                                    }
                                />
                                <div className="invalid-feedback">{errors.dob}</div>
                            </div>
                            {/* State */}
                            <div className="mb-3">
                                <label htmlFor="state" className='form-label'>State</label>
                                <select
                                    name="state"
                                    id="state"
                                    className={`form-control ${errors.state ? "is-invalid" : ""}`}
                                    value={formData.state}
                                    onChange={(e) =>
                                        setFormData({ ...formData, state: e.target.value })
                                    }
                                >
                                    <option value="">Select State</option>
                                    <option value="Odisha">Odisha</option>
                                    <option value="Maharastra">Maharastra</option>
                                    <option value="Karnataka">Karnataka</option>
                                    <option value="Delhi">Delhi</option>
                                </select>
                                <div className="invalid-feedback">{errors.state}</div>
                            </div>
                            {/* City */}
                            <div className="mb-3">
                                <label htmlFor="city" className='form-label'>City</label>
                                <select
                                    name="city"
                                    id="city"
                                    className={`form-control ${errors.city ? "is-invalid" : ""}`}
                                    value={formData.city}
                                    onChange={(e) =>
                                        setFormData({ ...formData, city: e.target.value })
                                    }
                                >
                                    <option value="">Select City</option>
                                    <option value="Bhubaneswar">Bhubaneswar</option>
                                    <option value="Rourkela">Rourkela</option>
                                    <option value="Banglore">Banglore</option>
                                    <option value="Mumbai">Mumbai</option>
                                    <option value="New Delhi">New Delhi</option>
                                </select>
                            </div>
                            {/* Status */}
                            <div className="mb-3">
                                <input
                                    id="isActive"
                                    className="form-check-input"
                                    type="checkbox"
                                    checked={formData.isActive}
                                    onChange={() =>
                                        setFormData({ ...formData, isActive: !formData.isActive, })
                                    }
                                />
                                <label htmlFor="isActive" className="form-check-label">Active</label>
                            </div>
                            {/* Image Upload */}
                            <div className="mb-3">
                                <label className="form-label">Profile Image</label>
                                <input
                                    type="file"
                                    className={`form-control ${errors.image ? "is-invalid" : ""}`}
                                    accept="image/*"
                                    onChange={handleImageChange}
                                />
                                <div className="invalid-feedback">{errors.image}</div>
                            </div>
                            {/* Preview */}
                            {preview && (
                                <div className="text-center">
                                    <img
                                        src={preview}
                                        alt="Preview"
                                        className="rounded-circle mt-2"
                                        width="90"
                                        height="90"
                                    />
                                </div>
                            )}
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={onClose}>
                                    Cancel
                                </button>
                                <button className="btn btn-primary">
                                    {isEditMode ? "Update" : "Add"}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EmployeeForm;