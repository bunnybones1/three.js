export default /* glsl */`
#ifdef USE_COLOR

	vColor.xyz = color.xyz;

#endif
#ifdef USE_COLOR_GLOW

	vColorGlow.xyz = colorGlow.xyz;

#endif
`;
