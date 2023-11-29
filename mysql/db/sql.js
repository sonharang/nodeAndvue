module.exports = {
    customerList : `SELECT * FROM customers`,
    customerInfo : `SELECT * FROM customers WHERE id = ?`,
    customerInsert: `INSERT INTO customers SET ?`, //set절은 객체를 받음(많은 데이터)
    customerUpdate: `UPDATE customers SET ? WHERE id = ?`, //객체가 아니라 배열로 보내야함
    customerDelete: `DELETE FROM customers WHERE id = ?`
}