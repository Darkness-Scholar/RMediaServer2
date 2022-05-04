import jwt from 'jsonwebtoken'
import CryptoJS from "crypto-js"
import { SECRET, ACCESS_TOKEN_LIFECYCLE, REFRESH_TOKEN_LIFECYCLE } from "../database/env"

/** 
 	* @const {Promise} generateToken sử dụng khi đăng nhập vào trang web 
	* @param {object} user là kết quả trả về từ mongo, bao gồm: _id, username, password, email, ... 
*/
export const generateToken = (user, tokenLife) => {

	/** @return {string} khởi tạo token với 1 promise, trả về 1 chuỗi */
	return new Promise((resolve, reject) => {
		const userData = {
			_id: user._id,
			name: user.username,
		}

		jwt.sign({ data: userData }, SECRET, { algorithm: "HS256", expiresIn: tokenLife }, (error, token) => {
			if (error) { return reject(error) }
			resolve(token) // -> Result
		})
	})
}

export const verifyToken = (token) => {
	return new Promise((resolve, reject) => {
		jwt.verify(token, SECRET, (error, decoded) => {
			if (error) {
				return reject(error);
			}
			resolve(decoded);
		});
	});
}

export const authChecking = async (req, res, next) => {
	const tokenFromClient = req.headers["x-access-token"]
	if (tokenFromClient) {
		try {
			const decoded = await verifyToken(tokenFromClient);
			req.jwtDecoded = decoded /* save to req, use later */
			next()
		} catch (err) {
			return res.status(401).json({ message: 'Unauthorized' });
		}
	} else {
		return res.status(403).send({ message: 'Token is not found' })
	}
}