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

@WebServlet("/LoginServlet")
public class LoginServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        System.out.println("LoginServlet");
//        获取用户输入的信息
        String username = request.getParameter("username");
        String password = request.getParameter("password");
        System.out.println(username);
        System.out.println(password);
//        调用mybatis完成查询
        String resource = "mybatis-config.xml";
        InputStream inputStream = Resources.getResourceAsStream(resource);
        SqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder().build(inputStream);
//      获取sqlsession对象
        SqlSession sqlSession = sqlSessionFactory.openSession();
//       获取mapper对象
        UserMapper userMapper = sqlSession.getMapper(UserMapper.class);
//       调用方法
        User user = userMapper.select(username,password);
//       关闭sqlsession
        sqlSession.close();

//        与数据库中的数据进行对比并作出反馈
        response.setContentType("text/html;charset = utf-8");
        PrintWriter writer = response.getWriter();
        if(user != null) {
            writer.write("Success!");
        } else {
            writer.write("Fail!");
        }
    }
}
