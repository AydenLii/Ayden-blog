# JDBC常用API

## DriverManager类

| 方法名称                                        | 功能描述                                                     |
| :---------------------------------------------- | :----------------------------------------------------------- |
| registerDriver（Driver drive）                  | 该方法用于向DriverMAnager中注册给定的JDBC驱动程序            |
| getConection(String url,String user,String pwd) | 该方法用于建立和数据库的连接，并返回表示连接的Connection对象 |

## Connection 接口

| **方法名称**                 | **功能描述**                                                 |
| :--------------------------- | :----------------------------------------------------------- |
| getMetaData()                | 用于返回表示数据库元数据的DatabaseMetaData对象               |
| createStatement()            | 用于创建一个Statement对象并将SQL语句发送到数据库             |
| prepareStatement(String sql) | 用于创建一个PreparedStatement对象并将参数化的SQL语句发送到数据库 |
| prepareCall(String sql)      | 用于创建一个CallableStatement对象来调用数据库存储过程        |

## Statement接口

| **方法名称**              | **功能描述**                                                 |
| :------------------------ | :----------------------------------------------------------- |
| execute(String sql)       | 用于执行各种SQL语句，该方法返回一个boolean类型的值，如果为true，表示所执行的SQL语句有查询结果，可通过Statement的getResultSet()方法获得查询结果 |
| executeUpdate(String sql) | 用于执行SQL中的insert、update和delete语句。该方法返回一个int类型的值，表示数据库中受该SQL语句影响的记录条数 |
| executeQuery(String sql)  | 用于执行SQL中的select语句，该方法返回一个表示查询结果的ResultSet对象 |

## PreparedStatement接口

| **方法名称**                                                 | **功能描述**                                                 |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| executeUpdate()                                              | 在此PreparedStatement对象中执行SQL语句，该语句必须是一个DML语句或者是无返回内容的SQL语句，比如 DDL 语句 |
| executeQuery()                                               | 在此PreparedStatement对象中执行SQL查询，该方法返回的是ResultSet对象 |
| setInt(int parameterIndex, int x)                            | 将指定参数设置为给定的int值                                  |
| setFloat(int parameterIndex, float x)                        | 将指定参数设置为给定的float值                                |
| setString(int parameterIndex, String x)                      | 将指定参数设置为给定的String值                               |
| setDate(int parameterIndex, Date x)                          | 将指定参数设置为给定的Date值                                 |
| addBatch()                                                   | 将一组参数添加到此PreparedStatement对象的批处理命令中        |
| setCharacterStream(int parameterIndex, java.io.Reader reader,int length) | 将指定的输入流写入数据库的文本字段                           |
| setBinaryStream(int parameterIndex, java.io.InputStream x, int length) | 将二进制的输入流数据写入到二进制字段中                       |

## ResultSet接口

| **方法名称**                 | **功能描述**                                                 |
| :--------------------------- | :----------------------------------------------------------- |
| getString(int columnIndex)   | 用于获取指定字段的String类型的值，参数columnIndex代表字段的索引 |
| getString(String columnName) | 用于获取指定字段的String类型的值，参数columnName代表字段的名称 |
| getInt(int columnIndex)      | 用于获取指定字段的int类型的值，参数columnIndex代表字段的索引 |
| getInt(String columnName)    | 用于获取指定字段的int类型的值，参数columnName代表字段的名称  |
| getDate(int columnIndex)     | 用于获取指定字段的Date类型的值，参数columnIndex代表字段的索引 |
| getDate(String columnName)   | 用于获取指定字段的Date类型的值，参数columnName代表字段的名称 |
| next()                       | 将游标从当前位置向下移一行                                   |
| absolute(int row)            | 将游标移动到此 ResultSet 对象的指定行                        |
| afterLast()                  | 将游标移动到此 ResultSet 对象的末尾，即最后一行之后          |
| beforeFirst()                | 将游标移动到此 ResultSet 对象的开头，即第一行之前            |
| previous()                   | 将游标移动到此 ResultSet 对象的上一行                        |
| last()                       | 将游标移动到此 ResultSet 对象的最后一行                      |