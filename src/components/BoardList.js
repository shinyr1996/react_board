import React from 'react';
import { Table } from 'react-bootstrap';

const BoardList = () => {
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>글번호</th>
            <th>제목</th>
            <th>작성자</th>
            <th>작성일</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>제목1</td>
            <td>작성자1</td>
            <td>2022.12.7</td>
          </tr>
          <tr>
            <td>2</td>
            <td>제목2</td>
            <td>작성자2</td>
            <td>2022.12.8</td>
          </tr>
          <tr>
            <td>3</td>
            <td>제목3</td>
            <td>작성자3</td>
            <td>2022.12.9</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default BoardList;