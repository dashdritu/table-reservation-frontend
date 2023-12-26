import {Spin} from 'antd';

const Spinner=({loading})=>{
    return(
        <div style={{textAlign:'center',marginTop:'20px'}}>
            <Spin size="large" spinning={loading} />
        </div>
    );
};

export default Spinner;