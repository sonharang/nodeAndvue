//전체조회
fetch('http://localhost:3000/posts')
    .then(res => res.json())
    .then(data => console.log('list', data))
    .catch(err => console.log(err));
//단건조회
fetch('http://localhost:3000/posts/1')
    .then(res => res.json())
    .then(data => console.log('info', data))
    .catch(err => console.log(err));
//등록
// fetch('http://localhost:3000/posts', {
//         method: 'post',
//         headers: {
//             'content-type': 'application/json' //*중요* content-type, json.stringify 같이 쓰임
//         },
//         body: JSON.stringify({
//             userId: 2,
//             id: 4,
//             title: 'Have A Nice Day',
//             body:'suscipit recusandae consequuntur expedita et cum\n' +
//             'reprehenderit molestiae ut ut quas totam\n'
//         })
//     })
//     .then(res => res.json())
//     .then(result => console.log('insert', result));
//수정
fetch('http://localhost:3000/posts/4', { //수정 할 대상 경로에 입력해야함
        method: 'put', //not post
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ //body에서는 수정할 데이터 입력
            userId: 3,
            title: 'Hello World!',
            body: 'suscipit recusandae consequuntur expedita et cum\n' +
                'reprehenderit molestiae ut ut quas totam'
        })
    })
    .then(res => res.json())
    .then(result => console.log('update', result));
//삭제
fetch('http://localhost:3000/posts/4', {
        method: 'delete'
    })
    .then(res => res.json())
    .then(result => console.log('delete', result));