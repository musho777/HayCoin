import Svg, { Path, Defs, LinearGradient, Stop, Rect, Pattern, Use, Image } from "react-native-svg"

export const Logo = () => {
    return <Svg
        width={109}
        height={100}
        viewBox="0 0 109 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <Path
            d="M66.039 39.816s-8.634 10.186-5.386 23.788C63.9 77.207 76.713 88.3 93.003 81.85c16.292-6.45 21.143-37.468 8.366-55.3C88.592 8.717 68.416-6.725 36.566 3.019 4.716 12.762-20.728 64.885 24.419 100c0 0-13.88-14.928-12.51-34.123 1.371-19.195 13.94-38.848 37.363-43.532 0 0-19.653 13.025-20.224 34.734-.571 21.709 11.883 45.589 47.417 42.39 0 0-18.129-4.362-23.79-22.673-5.663-18.312 7.694-33.12 13.364-36.98z"
            fill="url(#paint0_linear_21_143)"
        />
        <Path
            d="M76.465 99.468c-35.534 3.2-47.988-20.68-47.417-42.39.557-21.199 19.313-34.118 20.192-34.712-5.864 5.462-14.745 16.082-15.127 30.571-.482 18.351 8.34 38.252 32.544 42.04 5.255 3.396 9.808 4.49 9.808 4.49z"
            fill="url(#paint1_linear_21_143)"
        />
        <Path
            d="M104.078 71.08c-2.646 5.025-6.386 8.916-11.074 10.77-16.29 6.45-29.103-4.643-32.351-18.245-3.227-13.512 5.273-23.656 5.384-23.788l.001-.002c-2.2 4.221-4.627 11.237-2.65 19.518 3.249 13.602 16.06 24.695 32.352 18.246 3.25-1.288 6.048-3.554 8.338-6.499z"
            fill="url(#paint2_linear_21_143)"
        />
        <Defs>
            <LinearGradient
                id="paint0_linear_21_143"
                x1={6.41414}
                y1={79.5517}
                x2={100.721}
                y2={25.1039}
                gradientUnits="userSpaceOnUse"
            >
                <Stop offset={0.1} stopColor="#F27121" />
                <Stop offset={0.6} stopColor="#E94057" />
                <Stop offset={1} stopColor="#8A2387" />
            </LinearGradient>
            <LinearGradient
                id="paint1_linear_21_143"
                x1={29.38}
                y1={47.3705}
                x2={87.2525}
                y2={80.7833}
                gradientUnits="userSpaceOnUse"
            >
                <Stop offset={2.42203e-7} stopColor="#8A2387" />
                <Stop offset={0.7} stopColor="#8A2387" stopOpacity={0} />
            </LinearGradient>
            <LinearGradient
                id="paint2_linear_21_143"
                x1={59.9218}
                y1={61.7751}
                x2={104.078}
                y2={61.7751}
                gradientUnits="userSpaceOnUse"
            >
                <Stop stopColor="#8A2387" stopOpacity={0.7} />
                <Stop offset={0.5} stopColor="#8A2387" stopOpacity={0} />
            </LinearGradient>
        </Defs>
    </Svg>
}

export const World = () => {
    return <Svg
        width={18}
        height={18}
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
    >
        <Path fill="url(#pattern0)" d="M0 0H18V18H0z" />
        <Defs>
            <Pattern
                id="pattern0"
                patternContentUnits="objectBoundingBox"
                width={1}
                height={1}
            >
                <Use xlinkHref="#image0_23_332" transform="scale(.03125)" />
            </Pattern>
            <Image
                id="image0_23_332"
                width={32}
                height={32}
                xlinkHref="data:image/png;base64,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"
            />
        </Defs>
    </Svg>
}

export const ButtonArrow = () => {
    return <Svg
        width={30}
        height={30}
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <Rect
            x={29.5}
            y={29.5}
            width={29}
            height={29}
            rx={9.5}
            transform="rotate(-180 29.5 29.5)"
            fill="#fff"
            stroke="#E8E6EA"
        />
        <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.15 11.13a.577.577 0 01.816 0l3.461 3.462a.577.577 0 010 .816l-3.461 3.461a.577.577 0 01-.816-.815L16.203 15l-3.053-3.054a.577.577 0 010-.816z"
            fill="#E94057"
        />
    </Svg>
}

export const FbSvg = () => {
    return <Svg
        width={64}
        height={65}
        viewBox="0 0 64 65"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <Rect
            x={0.5}
            y={0.896225}
            width={63}
            height={63.6038}
            rx={14.5}
            fill="#fff"
            stroke="#E8E6EA"
        />
        <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M44.454 18.566H19.546c-.854 0-1.546.699-1.546 1.56V45.27c0 .861.692 1.56 1.546 1.56H32V35.726h-3.347V31.69H32V28.47c0-3.65 2.508-5.638 5.739-5.638 1.545 0 3.208.118 3.594.17v3.812H38.76c-1.757 0-2.092.84-2.092 2.076v2.798h4.187l-.547 4.037h-3.64V46.83h7.787c.854 0 1.546-.698 1.546-1.56V20.126c0-.861-.692-1.56-1.546-1.56z"
            fill="#E94057"
        />
    </Svg>
}

export const GSvg = () => {
    return <Svg
        width={64}
        height={65}
        viewBox="0 0 64 65"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <Rect
            x={0.5}
            y={0.896225}
            width={63}
            height={63.6038}
            rx={14.5}
            fill="#fff"
            stroke="#E8E6EA"
        />
        <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M45.572 30.52l-.14-.605H32.403v5.566h7.783c-.808 3.874-4.558 5.913-7.62 5.913-2.23 0-4.579-.947-6.134-2.468a8.879 8.879 0 01-2.612-6.238c0-2.344 1.043-4.69 2.562-6.232 1.519-1.543 3.813-2.406 6.093-2.406 2.612 0 4.484 1.4 5.184 2.039l3.918-3.934c-1.15-1.02-4.307-3.589-9.228-3.589-3.797 0-7.438 1.468-10.099 4.146-2.626 2.636-3.985 6.449-3.985 9.986 0 3.538 1.286 7.16 3.83 9.817 2.72 2.834 6.572 4.315 10.537 4.315 3.608 0 7.028-1.427 9.466-4.016 2.396-2.549 3.635-6.076 3.635-9.773 0-1.556-.155-2.48-.162-2.52z"
            fill="#E94057"
        />
    </Svg>
}

export const AppleSvg = () => {
    return <Svg
        width={64}
        height={65}
        viewBox="0 0 64 65"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <Rect
            x={0.5}
            y={0.896225}
            width={63}
            height={63.6038}
            rx={14.5}
            fill="#fff"
            stroke="#E8E6EA"
        />
        <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M33.054 20.892c1.025-1.26 2.775-2.223 4.275-2.326.255 1.722-.443 3.4-1.363 4.584-.955 1.244-2.59 2.215-4.187 2.215h-.12c-.3-1.64.465-3.333 1.395-4.473zm1.658 4.978c.856-.328 1.798-.688 3.171-.688l-.006.002c1.905 0 3.925 1.052 5.362 2.87-4.71 2.612-3.944 9.426.818 11.25-.65 1.474-.965 2.128-1.813 3.43-1.177 1.81-2.834 4.07-4.897 4.091h-.037c-.824 0-1.372-.254-1.961-.527-.688-.32-1.433-.665-2.742-.665h-.037c-1.328.008-2.096.355-2.8.673-.605.274-1.165.526-1.992.526h-.038c-2.062-.022-3.635-2.06-4.812-3.878-3.292-5.078-3.637-11.038-1.605-14.202 1.448-2.244 3.727-3.562 5.865-3.562 1.145 0 2.066.331 2.944.647.796.286 1.555.558 2.412.558.798 0 1.453-.25 2.168-.525z"
            fill="#E94057"
        />
    </Svg>
}