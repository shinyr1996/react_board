import React from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

const BoardList = () => {
    return (
        <div>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>글 번호</th>
          <th>제목</th>
          <th>작성자</th>
          <th>등록일</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>20221208</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>20221208</td>
        </tr>
      </tbody>
    </Table>
    <Button>글쓰기</Button>
        </div>
    );
};

export default BoardList; 