import { Divider, DividerProps } from 'antd';

type CustomDividerProps = DividerProps & {
  width?: number;
  color?: string;
  thickness?: number;
};

const CustomDivider = ({ width, color, thickness, dashed, ...props }: CustomDividerProps) => {
  return (
    <div style={{ width: width }}>
      <Divider
        {...props}
        style={{
          ...props.style,
          margin: '10px 0px',
          borderBlockStart: `${thickness ?? 1}px ${dashed ? 'dashed' : 'solid'} ${color || 'grey'}`,
        }}
      />
    </div>
  );
};

export default CustomDivider;
