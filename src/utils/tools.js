import md5 from "js-md5";
import crypto from "crypto"
export function encriptPass(password) {
    return md5(md5(password + md5('resume')) + md5('manage'))
}
export function encryptVal(val) {
    // 加密
    if (!val) return
    const key = Buffer.from('9vApxLk5G3PAsJrM', 'utf8');
    const iv = Buffer.from('FnJL7EDzjqWjcaY9', 'utf8');
    const cipher = crypto.createCipheriv('aes-128-cbc', key, iv);
    var crypted = cipher.update(val, 'utf8', 'hex');
    crypted += cipher.final('hex');
    return crypted;
}
export function decryptVal(val) {
    // 解密
    const key = Buffer.from('9vApxLk5G3PAsJrM', 'utf8');
    const iv = Buffer.from('FnJL7EDzjqWjcaY9', 'utf8');
    const decipher = crypto.createDecipheriv('aes-128-cbc', key, iv);
    var str = decipher.update(val, 'hex', 'utf8');
    str += decipher.final('utf8');
    return str;
}