package com.itheima.web;

import com.itheima.mapper.UserMapper;
import com.itheima.pojo.User;
import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;
import java.io.InputStream;
import java.io.PrintWriter;

@WebServlet("/RegisterServlet")
public class RegisterServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String username = request.getParameter("username");
        String password = request.getParameter("password");

        User user = new User();
        user.setUsername(username);
        user.setPassword(password);

        String resource = "mybatis-config.xml";
        InputStream inputStream = Resources.getResourceAsStream(resource);
        SqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder().build(inputStream);
//      获取sqlsession对象
        SqlSession sqlSession = sqlSessionFactory.openSession();
//       获取mapper对象
        UserMapper userMapper = sqlSession.getMapper(UserMapper.class);
//       调用方法
        User u = userMapper.selectByUsername(username);
        if(u == null) {
            userMapper.add(user);
//          提交事务
            sqlSession.commit();
        } else {
            response.setContentType("text/html;charset = utf-8");
            response.getWriter().write("用户名已经存在");
        }
//       关闭sqlsession
        sqlSession.close();
    }
}
