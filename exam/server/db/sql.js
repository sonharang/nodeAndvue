module.exports = {
  conList: `select t_board_board.no,t_board_board.title,t_board_board.writer,t_board_board.content,t_board_board.created_date,t_comment_board.bno from t_board_board left join t_comment_board  on t_board_board.no = t_comment_board.bno;`,
  conInfo: `select t_board_board.no,t_board_board.title,t_board_board.writer,t_board_board.content,t_board_board.created_date,t_comment_board.bno from t_board_board left join t_comment_board  on t_board_board.no = t_comment_board.bno where t_board_board.no = ?;`,
  conInsert: `insert into t_board_board set ? `,
  conUpdate: `update t_board_board set ? where no = ?`,
};
