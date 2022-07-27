import React from 'react';

const Education = () => {
  return (
    <div>
      <div className="card">
        <div className="card-content">
          <h6 className="header-me">EDUCATION</h6>
          <table className="highlight">
            <thead>
              <tr>
                <th>Degree</th>
                <th>Department</th>
                <th>Institute</th>
                <th>year</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Advanced Diploma</td>
                <td>Software Engineering</td>
                <td>APTECH</td>
                <td>2020 - 2022</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Education;
