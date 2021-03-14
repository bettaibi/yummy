// @ts-ignore
import Localbase from 'localbase';

const db = new Localbase('yummy');

db.config.debug = false

export default db;