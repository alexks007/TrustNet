import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Svg, {
  Circle,
  Ellipse,
  G,
  Filter,
  Text,
  TSpan,
  TextPath,
  Path,
  Polygon,
  Polyline,
  Line,
  Rect,
  Use,
  Image,
  Symbol,
  Defs,
  LinearGradient,
  RadialGradient,
  Stop,
  ClipPath,
  Pattern,
  Mask,
} from 'react-native-svg';

const SvgIcon = ({ shape, color, onPress, style }) => {
  const SvgIconGroup = {
    COMMUNITY: (
      <Svg xmlns="http://www.w3.org/2000/svg" width="32" height="19" viewBox="0 0 32 19">
        <G fill="none" fill-rule="evenodd">
          <G fill={color}>
            <G>
              <G>
                <Path
                  d="M16 10.857c-4.418 0-8 3.646-8 8.143h16c0-4.497-3.582-8.143-8-8.143M25.6 10.857c2.21 0 4-1.823 4-4.071 0-2.249-1.79-4.072-4-4.072s-4 1.823-4 4.072c0 2.248 1.79 4.071 4 4.071M25.6 11.58c-1.071 0-2.08.27-2.968.744 1.669 1.717 2.701 4.076 2.701 6.676h6.604c.04-.296.063-.598.063-.905 0-3.598-2.865-6.514-6.4-6.514"
                  transform="translate(-321 -743) translate(0 703) translate(321 40)"
                />
                <G>
                  <Path
                    d="M6.4.045C2.865.045 0 2.962 0 6.56c0 .307.022.608.063.904h6.604c0-2.6 1.032-4.959 2.7-6.676C8.48.315 7.472.045 6.4.045"
                    transform="translate(-321 -743) translate(0 703) translate(321 40) translate(0 11.536)"
                  />
                </G>
                <Path
                  d="M11.333 4.75c0 2.623 2.09 4.75 4.667 4.75s4.667-2.127 4.667-4.75S18.577 0 16 0s-4.667 2.127-4.667 4.75M6.4 2.714c-2.21 0-4 1.823-4 4.072 0 2.248 1.79 4.071 4 4.071s4-1.823 4-4.071c0-2.249-1.79-4.072-4-4.072"
                  transform="translate(-321 -743) translate(0 703) translate(321 40)"
                />
              </G>
            </G>
          </G>
        </G>
      </Svg>
    ),

    MY_CHALLENGES: (
      <Svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <G fill="none" fill-rule="evenodd">
          <G fill={color}>
            <Path
              d="M112 760c6.627 0 12 5.373 12 12s-5.373 12-12 12-12-5.373-12-12 5.373-12 12-12zm-.13 6c-.141 0-.257.095-.346.284l-1.587 3.154-3.542.506c-.263.042-.395.148-.395.319 0 .097.059.208.176.332l2.568 2.454-.606 3.466c-.01.065-.014.11-.014.138 0 .097.024.18.074.246.049.067.123.101.222.101.085 0 .179-.028.282-.083l3.168-1.636 3.168 1.636c.098.055.192.083.282.083.094 0 .166-.034.215-.1.05-.068.074-.15.074-.247 0-.06-.002-.106-.007-.138l-.607-3.466 2.561-2.454c.123-.12.184-.23.184-.332 0-.171-.132-.277-.395-.32l-3.542-.505-1.587-3.154c-.09-.19-.205-.284-.346-.284z"
              transform="translate(-100 -760)"
            />
          </G>
        </G>
      </Svg>
    ),

    DATA_CENTER: (
      <Svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <G fill="none" fill-rule="evenodd">
          <G fill={color} fill-rule="nonzero">
            <G>
              <G>
                <Path
                  d="M13.31.163v11.833c0 .725-.589 1.313-1.314 1.313H.163C.815 19.272 5.864 23.913 12 23.913c6.58 0 11.913-5.334 11.913-11.913 0-6.137-4.641-11.185-10.604-11.837zm-2.62 0C5.16.768.769 5.16.164 10.691h10.528V.163z"
                  transform="translate(-251 -837) translate(0 799) translate(251 38)"
                />
              </G>
            </G>
          </G>
        </G>
      </Svg>
    ),

    HOME: (
      <Svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 24 20">
        <G fill="none" fill-rule="evenodd">
          <G fill={color} fill-rule="nonzero">
            <Path
              d="M35.333 2604.833L35.333 2597.833 40 2597.833 40 2604.833 45.833 2604.833 45.833 2595.5 49.333 2595.5 37.667 2585 26 2595.5 29.5 2595.5 29.5 2604.833z"
              transform="translate(-26 -2585)"
            />
          </G>
        </G>
      </Svg>
    ),

    CALENDAR_ADD: (
      <Svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
        <G fill="none" fill-rule="evenodd">
          <G filter="url(#gntagb90ga)" transform="translate(-79 -67)">
            <G>
              <Path
                fill={color}
                d="M14.96 3.52h1.76V.88h-1.76v2.64zm-10.56 0h1.76V.88H4.4v2.64zm16.28-1.76H17.6V.44c0-.243-.197-.44-.44-.44h-2.64c-.242 0-.44.197-.44.44v1.32H7.04V.44C7.04.197 6.843 0 6.6 0H3.96c-.242 0-.44.197-.44.44v1.32H.44c-.242 0-.44.197-.44.44v3.96h21.12V2.2c0-.243-.197-.44-.44-.44zM21.12 7.5v13.175c0 .235-.197.425-.44.425H.44c-.242 0-.44-.19-.44-.425V7.5h21.12zM6 15.189H3.5v2.421H6V15.19zm6 0H9.5v2.421H12V15.19zm6 0h-2.5v2.421H18V15.19zM6 10.406H3.5v2.422H6v-2.422zm6 0H9.5v2.422H12v-2.422zm6 0h-2.5v2.422H18v-2.422z"
                transform="translate(79 67)"
              />
            </G>
          </G>
        </G>
      </Svg>
    ),

    CHAT: (
      <Svg xmlns="http://www.w3.org/2000/svg" width="24" height="22" viewBox="0 0 24 22">
        <G fill="none" fill-rule="evenodd">
          <G fill={color} fill-rule="nonzero">
            <G>
              <Path
                d="M6.96 13.689V6.11H2.4c-1.32 0-2.4 1.1-2.4 2.445v7.333c0 1.344 1.08 2.444 2.4 2.444h1.2V22l3.6-3.667h6c1.32 0 2.4-1.1 2.4-2.444v-2.225c-.077.018-.158.026-.24.026h-8.4v-.001zM21.6 0H10.8C9.48 0 8.4 1.1 8.4 2.444v9.778h8.4l3.6 3.667v-3.667h1.2c1.32 0 2.4-1.099 2.4-2.444V2.444C24 1.1 22.92 0 21.6 0z"
                transform="translate(-289 -67) translate(289 67)"
              />
            </G>
          </G>
        </G>
      </Svg>
    ),

    NOTIFICATION: (
      <Svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
        <G fill="none" fill-rule="evenodd">
          <G>
            <G>
              <Path d="M0 0H22V22H0z" transform="translate(-335 -66) translate(335 66)" />
              <Path
                fill={color}
                fill-rule="nonzero"
                d="M11 22c1.31 0 2.381-.99 2.381-2.2H8.62C8.619 21.01 9.69 22 11 22zm7.739-6.6V9.35c0-3.355-2.56-6.215-5.953-6.93v-.77C12.786.715 12.012 0 11 0S9.214.715 9.214 1.65v.77c-3.393.715-5.953 3.575-5.953 6.93v6.05L.88 17.6v1.1h20.24v-1.1l-2.381-2.2z"
                transform="translate(-335 -66) translate(335 66)"
              />
            </G>
          </G>
        </G>
      </Svg>
    ),

    GROUP: (
      <Svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
        <G fill="none" fill-rule="evenodd">
          <G>
            <G>
              <G>
                <Path
                  fill={color}
                  d="M10 20C4.477 20 0 15.524 0 10 0 4.477 4.477 0 10 0c5.524 0 10 4.477 10 10 0 5.524-4.476 10-10 10z"
                  transform="translate(-39 -76) translate(18 61) translate(21 15)"
                />
                <Path
                  fill="#FFF"
                  d="M14.74 7.463H5.26c-.328 0-.593-.299-.593-.667 0-.368.265-.666.592-.666h9.482c.327 0 .592.298.592.666 0 .368-.265.667-.592.667M14.74 10.667H5.26c-.328 0-.593-.299-.593-.667 0-.368.265-.667.592-.667h9.482c.327 0 .592.299.592.667 0 .368-.265.667-.592.667M14.74 13.871H5.26c-.328 0-.593-.299-.593-.667 0-.368.265-.666.592-.666h9.482c.327 0 .592.298.592.666 0 .368-.265.667-.592.667"
                  transform="translate(-39 -76) translate(18 61) translate(21 15)"
                />
              </G>
            </G>
          </G>
        </G>
      </Svg>
    ),

    SEARCH: (
      <Svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17">
        <G fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
          <G stroke={color} stroke-width="2.44">
            <G>
              <G transform="translate(-28 -144) translate(15 130) translate(15 16)">
                <Circle cx="5.778" cy="5.778" r="5.778" />
                <Path d="M13 13L9.858 9.858" />
              </G>
            </G>
          </G>
        </G>
      </Svg>
    ),

    FILTER: (
      <Svg xmlns="http://www.w3.org/2000/svg" width="34" height="13" viewBox="0 0 34 13">
        <G fill="none" fill-rule="evenodd">
          <G fill={color}>
            <G>
              <G>
                <Path
                  d="M11.675 0H.575C.065 0-.193.619.169.98l4.425 4.426v4.93c0 .187.091.363.245.47l1.914 1.34c.377.264.903-.004.903-.47v-6.27L12.081.98c.36-.36.105-.98-.406-.98z"
                  transform="translate(-312 -145) translate(15 130) translate(297.314 15.18)"
                />
                <Path
                  fill-rule="nonzero"
                  d="M16.02 11.308h5.653V9.423H16.02v1.885zM16.02 0v1.885h16.96V0H16.02zm0 6.596h11.307V4.712H16.019v1.884z"
                  transform="translate(-312 -145) translate(15 130) translate(297.314 15.18)"
                />
              </G>
            </G>
          </G>
        </G>
      </Svg>
    ),

    RATE: (
      <Svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15">
        <G fill="none" fill-rule="evenodd">
          <G fill={color}>
            <G>
              <G>
                <G>
                  <Path
                    d="M7 .467c3.608 0 6.533 2.925 6.533 6.533 0 3.608-2.925 6.533-6.533 6.533C3.392 13.533.466 10.608.466 7 .466 3.392 3.392.467 7 .467zm3.696 7.526H3.304c-.327 0-.576.313-.485.627.525 1.815 2.203 3.144 4.183 3.144 1.981 0 3.655-1.329 4.18-3.144.09-.314-.159-.627-.486-.627zM4.503 2.99c-.043-.086-.166-.086-.209 0l-.49.994c-.018.035-.05.059-.09.064l-1.096.16c-.096.013-.134.131-.065.199l.794.773c.028.027.04.066.034.104l-.188 1.093c-.015.095.084.168.17.123l.981-.516c.034-.018.074-.018.109 0l.982.516c.085.045.185-.028.169-.123l-.188-1.093c-.006-.038.006-.077.034-.104l.794-.773c.07-.068.03-.186-.065-.2l-1.097-.159c-.038-.005-.07-.03-.088-.064zm5.203 0c-.042-.086-.167-.086-.21 0l-.49.994c-.017.035-.05.059-.088.064l-1.097.16c-.096.013-.134.131-.065.199l.795.773c.027.027.04.066.033.104l-.187 1.093c-.017.095.083.168.169.123l.982-.516c.033-.018.074-.018.108 0l.981.516c.085.045.186-.028.17-.123l-.188-1.093c-.006-.038.006-.077.033-.104l.794-.773c.07-.068.032-.186-.064-.2l-1.098-.159c-.037-.005-.07-.03-.087-.064z"
                    transform="translate(-63 -930) translate(15 581) translate(48 347.5) translate(0 2)"
                  />
                </G>
              </G>
            </G>
          </G>
        </G>
      </Svg>
    ),

    COMMENTS: (
      <Svg xmlns="http://www.w3.org/2000/svg" width="15" height="13" viewBox="0 0 15 13">
        <G fill="none" fill-rule="evenodd">
          <G>
            <G>
              <G
                filter="url(#g3wh9gkz4a)"
                transform="translate(-242 -931) translate(15 581) translate(227 347)">
                <G fill={color} fill-rule="nonzero">
                  <Path
                    d="M3.174 4.333v4.385c0 .371.312.675.693.675h5.021v1.44c0 .298-.25.542-.555.542H1.944L0 13V4.875c0-.298.25-.542.556-.542h2.618z"
                    transform="translate(0 3)"
                  />
                  <Path
                    d="M14.193 0c.38 0 .692.304.692.675v10.124l-2.422-2.025H4.502c-.381 0-.692-.304-.692-.675V.675C3.81.304 4.12 0 4.502 0zm-2.077 4.725H6.578v1.35h5.538v-1.35zm0-2.025H6.578v1.35h5.538V2.7z"
                    transform="translate(0 3)"
                  />
                </G>
              </G>
            </G>
          </G>
        </G>
      </Svg>
    ),
  };

  return onPress ? (
    <TouchableOpacity style={style} onPress={onPress}>
      {SvgIconGroup[shape]}
    </TouchableOpacity>
  ) : (
    <View style={style}>{SvgIconGroup[shape]}</View>
  );
};

export default SvgIcon;
