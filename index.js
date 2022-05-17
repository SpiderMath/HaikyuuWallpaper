import { setWallpaper } from 'wallpaper';
import { readdirSync } from 'fs';
import chalk from 'chalk';
import { join } from 'path';
import { URL } from 'url';

const __dirname = new URL('.', import.meta.url).pathname;
const { floor, random } = Math;

const files = readdirSync(join(__dirname, "./Assets"));

const randomFile = files[floor(random() * files.length)];

setWallpaper(
	join(__dirname, `./Assets/${randomFile}`),
)
	.then(() => console.log(chalk.bgGreenBright('Changed wallpaper successfully!')))
	.catch((err) => console.log(chalk.bgRedBright('Something went wrong while changing the wallpaper', err)));