export async function searchMovie(search_data) {
  try {
    console.log("search_data: " + search_data);

    const response = await fetch(
      "http://localhost:3001/api/movie/search?search_text=" + search_data
    );

    return await response.json(); //***

    // console.log('Search Movie response: ' + await response);
  } catch (error) {
    return [];
  }
}

export async function getAllMovies() {
  try {
    //const response = await fetch('/api/users');
    const response = await fetch("http://localhost:3001/api/movie/all");
    //const response = await fetch('/api/movie/all');
    return await response.json();
  } catch (error) {
    return [];
  }
}

//ส่วนที่เเก้ยังไม่เสร็จ
export async function createMovie(data) {
  try {
    const response = await fetch(`http://localhost:3001/api/movie/insert`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data), // ส่งข้อมูลตรงๆ
    });

    // ตรวจสอบสถานะการตอบกลับ
    if (!response.ok) {
      throw new Error(`Failed to create movie. Status: ${response.status}`);
    }

    const result = await response.json();
    return result; // คืนค่าผลลัพธ์
  } catch (error) {
    console.error("Error creating movie:", error);
    throw error; // ข้อผิดพลาดจะถูกโยนออกไป
  }
}

