export default function setCSSGridResolution(resolution: number) {
  document.documentElement.style.setProperty(
    "--grid-resolution",
    `${resolution}`
  );
}
