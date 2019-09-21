declare module "*.scss" {
  const content: { [className: string]: string };
  export default content;
}

// https://stackoverflow.com/questions/40382842/cant-import-css-scss-modules-typescript-says-cannot-find-module
