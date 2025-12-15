const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

const keystorePath = path.join(process.env.USERPROFILE, '.android', 'debug.keystore');
const keytoolCommand = `keytool -list -v -keystore "${keystorePath}" -alias androiddebugkey -storepass android`;

exec(keytoolCommand, (error, stdout, stderr) => {
    if (error) {
        return;
    }

    const output = stdout.toString();
    const sha256Match = output.match(/SHA256:\s*([A-Fa-f0-9:]+)/);

    if (sha256Match && sha256Match[1]) {
        fs.writeFileSync('sha_output.txt', sha256Match[1]);
    }
});
