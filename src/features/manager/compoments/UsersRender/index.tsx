import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Button, Modal, Row, Space, Table, TableColumnsType } from 'antd';
import { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { User } from '../../../user/type';
import { useManagerSlice } from '../../store';
import { selectManagerUsers } from '../../store/selectors';
import { UserEditor } from './UserEditor';

export const UsersRender = () => {
  const users = useSelector(selectManagerUsers);
  const [edit, setEdit] = useState<User>();
  const dispatch = useDispatch();

  const { actions } = useManagerSlice();

  useEffect(() => {
    if (!Object.keys(users).length) {
      dispatch(actions.getUsers());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, actions]);

  const cols: TableColumnsType<User> = useMemo(() => {
    const tmp: TableColumnsType<User> = [
      {
        title: 'Tên',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'Địa chỉ email',
        dataIndex: 'email',
        key: 'email',
      },
      {
        width: 100,
        title: 'Role',
        dataIndex: 'isAdmin',
        key: 'isAdmin',
        render: (text) => (text ? 'Admin' : 'User'),
      },
      {
        width: 100,
        render: (_any, record) => (
          <Space size="middle">
            <EditOutlined
              style={{
                fontSize: 20,
                color: '#1890ff',
              }}
              onClick={() => setEdit(record)}
            />
            <DeleteOutlined
              style={{
                fontSize: 20,
                color: '#ff4d4f',
              }}
              onClick={() => {
                Modal.confirm({
                  title: 'Xác nhận xóa',
                  content: 'Bạn có chắc chắn muốn xóa người dùng này?',
                  onOk: () => {
                    dispatch(
                      actions.updateUsers({
                        action: 'delete',
                        data: record,
                      })
                    );
                  },
                });
              }}
            />
          </Space>
        ),
      },
    ];
    return tmp;
  }, [actions, dispatch]);

  return (
    <div
      style={{
        padding: 20,
      }}
    >
      {edit ? <UserEditor user={edit} onCancel={() => setEdit(undefined)} /> : null}
      <Row justify="end" style={{ marginBottom: 10 }}>
        <Button
          type="primary"
          style={{
            backgroundColor: '#d3a971',
          }}
          onClick={() => setEdit({} as User)}
        >
          Thêm người dùng
        </Button>
      </Row>
      <Table pagination={false} dataSource={Object.values(users)} columns={cols} />
    </div>
  );
};
