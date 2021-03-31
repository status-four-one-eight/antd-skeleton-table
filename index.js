import { Table, Skeleton } from 'antd';
import PropTypes from 'prop-types';

const SkeletonTable = ({ columns, rowCount }) => {
  return (
    <Table
      pagination={false}
      dataSource={[...Array(rowCount)].map(() => ({}))}
      columns={columns.map((column) => {
        return {
          ...column,
          render: function renderPlaceholder() {
            return <Skeleton title={true} paragraph={false} />;
          },
        };
      })}
    />
  );
};

SkeletonTable.propTypes = {
  columns: PropTypes.array.isRequired,
  rowCount: PropTypes.number,
};

SkeletonTable.defaultProps = {
  rowCount: 20,
};

export default SkeletonTable;
