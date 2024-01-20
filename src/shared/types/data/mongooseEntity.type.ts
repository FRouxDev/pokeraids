export type MongooseEntity<T> = T & {
  _id: string;
};

export type MongooseEntityWithTimestamps<T> = T & {
  _id: string;
  createdAt: Date;
  updatedAt: Date;
};
