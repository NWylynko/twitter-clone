import { ObjectID } from 'bson';

export const generateId = () => new ObjectID().toString();