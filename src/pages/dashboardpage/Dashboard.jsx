import { useState, useMemo } from 'react';
import employeesData from '../../data/employeemockdata/employees';
import DashboardCards from '../../components/EmdDashboard/DashboardCards';
import EmployeeTable from '../../components/EmdDashboard/EmployeeTable';
import EmployeeForm from '../../components/EmdDashboard/EmployeeForm';
import EmployeeFilter from '../../components/EmdFilters/EmployeeFilter';
import "../../assets/styles/Dashboard/dashboard.css"


const EmdDashboard = () => {
  //Showing Number of Mock Employees in the Table
  const [employees, setEmployees] = useState(employeesData);
  const totalEmployees = employees.length;
  const activeEmployees = employees.filter(emp => emp.isActive).length;
  const inactiveEmployees = employees.filter(emp => !emp.isActive).length;

  // Add/Edit Form Page
  const [showForm, setShowForm] = useState(false);
  const [editEmployee, setEditEmployee] = useState(null);

  //Filter
  const [searchTerm, setSearchTerm] = useState("");
  const [genderFilter, setGenderFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  const toggleStatus = (id) => {
    setEmployees((prevEmployees) =>
      prevEmployees.map((emp) =>
        emp.id === id ? { ...emp, isActive: !emp.isActive } : emp
      )
    );
  };

  const deleteEmployee = (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this employee?');
    if (!confirmDelete) return;
    setEmployees((prevEmployees) =>
      prevEmployees.filter((emp) => emp.id !== id)
    );
  };

  const handleAddEmployee = () => {
    setEmployees((prev) => [
      ...prev,
      { ...data, id: Date.now() },
    ]);
  };

  const handleEditEmployee = (emp) => {
    setEditEmployee(emp);
    setShowForm(true);
  };

  const handleSaveEmployee = () => {
    if (editEmployee) {
      setEmployees((prev) =>
        prev.map((emp) =>
          emp.id === editEmployee.id ? { ...employeesData, id: emp.id } : emp
        ));
    } else {
      handleAddEmployee(data);
    }
    setEditEmployee(null);
  };

  const filteredEmployees = useMemo(() => {
    return employees.filter((emp) => {
      const matchesSearch =
        emp.full_name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesGender =
        genderFilter ? emp.gender === genderFilter : true;
      const matchesStatus = statusFilter === "active" ? emp.isActive :
        statusFilter === "inactive" ? !emp.isActive : true;
      return matchesSearch && matchesGender && matchesStatus;
    });
  }, [employees, searchTerm, genderFilter, statusFilter]);

  return (
    <div className="container-fluid mt-3">
      <h1 className="dashboard-title mb-4">Employee Management Dashboard</h1>
      <DashboardCards
        total={totalEmployees}
        active={activeEmployees}
        inactive={inactiveEmployees}
      />

      <div className="card border-0 shadow-sm">
        <div className="row row-cols-1 row-cols-2 g-3">
          <div className="col">
            <EmployeeFilter
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
              genderFilter={genderFilter}
              onGenderChange={setGenderFilter}
              statusFilter={statusFilter}
              onStatusChange={setStatusFilter}
              onClear={() => {
                setSearchTerm("");
                setGenderFilter("");
                setStatusFilter("");
              }}
            />
          </div>
          <div className="col">
            <button
              className="btn btn-primary mb-3"
              onClick={() => setShowForm(true)}
            >
              + Add Employee
            </button>
          </div>
        </div>

        <EmployeeTable
          employees={filteredEmployees}
          onToggleStatus={toggleStatus}
          onDelete={deleteEmployee}
          onEdit={handleEditEmployee}
        />

        <EmployeeForm
          show={showForm}
          onClose={() => {
            setShowForm(false);
            setEditEmployee(null);
          }}
          onSave={handleSaveEmployee}
          editEmployee={editEmployee}
        />
      </div>
    </div>
  );
};
export default EmdDashboard;