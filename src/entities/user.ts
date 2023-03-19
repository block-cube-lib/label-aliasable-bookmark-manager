import {
  FieldValue,
  DocumentData,
  QueryDocumentSnapshot,
  SnapshotOptions,
} from 'firebase/firestore';

class User {
  uid: string;
  display_name: string;
  email: string | null;
  created_at: FieldValue;

  constructor(
    uid: string,
    display_name: string,
    email: string | null,
    created_at: FieldValue
  ) {
    this.uid = uid;
    this.display_name = display_name;
    this.email = email;
    this.created_at = created_at;
  }

  toString(): string {
    return `${this.display_name}<${this.email}>`;
  }
}

const UserConverter = {
  toFirestore(user: User): DocumentData {
    return {
      uid: user.uid,
      display_name: user.display_name,
      email: user.email,
      created_at: user.created_at,
    };
  },
  fromFirestore(
    snapshot: QueryDocumentSnapshot,
    options: SnapshotOptions
  ): User {
    const data = snapshot.data(options);
    return new User(data.uid, data.display_name, data.email, data.created_at);
  },
};

export { User, UserConverter };
