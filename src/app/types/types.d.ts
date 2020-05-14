type ColumnType = 'CHECKBOX'
  | 'DESCRIPTION'
  | 'IMAGE'
  | 'TEXT'
  | 'TITLE'
  | 'VOTE';

interface Column {
  key: string;
  title: string;
  type: ColumnType;
}

interface Entity {
  id?: string;
}

interface VoteEntity extends Entity {
  votedPeople: {[key: string]: boolean};
  votes: number;
}
