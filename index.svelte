<script>
  export let icon;
  export let color = "#000000";
  export let secondaryColor = color;
  export let secondaryOpacity = "0.5";
  export let size = "xs";
  export let flip = "none";
  export let rotate = "0";
  export let style = "";

  let height = size;
  let flipX = "1";
  let flipY = "1";

  $: {
    switch (size) {
      case "xs":
        height = "0.75em";
        break;
      case "sm":
        height = "0.875em";
        break;
      case "lg":
        height = "1.33em";
        break;
      case "2x":
        height = "2em";
        break;
      case "3x":
        height = "3em";
        break;
      case "4x":
        height = "4em";
        break;
      case "5x":
        height = "5em";
        break;
      case "6x":
        height = "6em";
        break;
      case "7x":
        height = "7em";
        break;
      case "8x":
        height = "8em";
        break;
      case "9x":
        height = "9em";
        break;
      case "10x":
        height = "10em";
        break;
      default:
        break;
    }
    rotate = rotate / 360;
    switch (flip) {
      case "h":
        flipX = -1;
        break;
      case "v":
        flipY = -1;
        break;
      case "hv":
        flipX = -1;
        flipY = -1;
        break;
      default:
        flipX = 0;
        flipY = 0;
        break;
    }
  }
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox={`0 0 ${icon.icon[0]} ${icon.icon[1]}`}
  {height}
  aria-hidden="true"
  role="img"
  style={`transform: rotate(${rotate}turn) scaleX(${flipX}) scaleY(${flipY}); ${style}`}>

  {#if Array.isArray(icon.icon[4])}
    <path
      d={icon.icon[4][0]}
      fill={color}
      style={`opacity: ${secondaryOpacity}`} />
    <path d={icon.icon[4][1]} fill={secondaryColor} />
  {:else}
    <path d={icon.icon[4]} fill={color} />
  {/if}
</svg>
