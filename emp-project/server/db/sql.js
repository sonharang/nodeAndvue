module.exports = {
  empList: `select e.emp_no,e.first_name,e.last_name,e.gender,e.birth_date,e.hire_date,(select salary from salaries where to_date = cast('9999-01-01' as date) and emp_no = e.emp_no) as salary,
  d.dept_no,
  d.dept_name,
  h.from_date
  from employees e join dept_emp h
          on(e.emp_no = h.emp_no)
                  join departments d
                  on(h.dept_no = d.dept_no)
                  join salaries s
                  on(e.emp_no = s.emp_no)
  where h.to_date = cast('9999-01-01' as date)
  and s.to_date = cast('9999-01-01' as date)
  order by e.emp_no DESC
  limit 0, 10;`,
  empInfo: `select e.emp_no,e.first_name,e.last_name,e.gender,e.birth_date,e.hire_date,(select salary from salaries where to_date = cast('9999-01-01' as date) and emp_no = e.emp_no) as salary,
  d.dept_no,
  d.dept_name,
  h.from_date
  from employees e join dept_emp h
          on(e.emp_no = h.emp_no)
                  join departments d
                  on(h.dept_no = d.dept_no)
                  join salaries s
                  on(e.emp_no = s.emp_no)
  where h.to_date = cast('9999-01-01' as date)
  and s.to_date = cast('9999-01-01' as date)
  and e.emp_no = ?`,
  empInsert: `INSERT INTO employees SET ?`,
  deptInsert: `INSERT INTO dept_emp SET ?`,
  salaryInsert: `INSERT INTO salaries SET ?`,

  empUpdate: `UPDATE employees SET ? WHERE emp_no = ?`,

  deptDelete: `UPDATE dept_emp SET to_date = ? WHERE emp_no = ?`,
  salaryDelete: `UPDATE salaries SET to_date = ? WHERE emp_no = ?`,

  deptList: `select * from departments order by dept_no`,
};
