export default /* glsl */`
#ifdef USE_COLOR

	diffuseColor.rgb *= vColor;

#endif
#ifdef USE_COLOR_GLOW

	diffuseColor.rgb += vColorGlow;

#endif
`;
