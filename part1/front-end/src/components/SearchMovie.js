import React, { useState } from "react";

const SearchMovie = ({ onChangeForm, searchMovie }) => {
  const [director, setDirector] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!director) {
      alert("กรุณากรอกชื่อผู้กำกับเพื่อค้นหา");
      return;
    }
    searchMovie(director); // ส่งชื่อผู้กำกับไปยังฟังก์ชัน searchMovie
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-7 mrgnbtm">
          <h2>ค้นหาภาพยนตร์</h2>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="form-group col-md-6">
                <input
                  type="text"
                  onChange={(e) => {
                    setDirector(e.target.value); // จัดการค่าของอินพุต
                    onChangeForm(e); // เรียกใช้งาน handler ภายนอกหากต้องการ
                  }}
                  className="form-control"
                  name="director"
                  id="director"
                  placeholder="ชื่อผู้กำกับ"
                  value={director} // ผูกค่ากับ state
                />
              </div>
            </div>
            <button type="submit" className="btn btn-danger">
              ค้นหา
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchMovie;
