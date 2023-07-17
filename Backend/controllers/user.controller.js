const { UserModel } = require('../models/user.model');
const bcrypt = require('bcrypt');
require('dotenv').config();
const {redis} = require('../database/redis');
const jwt = require('jsonwebtoken');