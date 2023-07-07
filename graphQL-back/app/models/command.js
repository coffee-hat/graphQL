export default (sequelize, Sequelize) => {
    return sequelize.define(
        "command",
        {
            city : {
                type: Sequelize.STRING,
                allowNull: false
            },
            zip_code : {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            street : {
                type: Sequelize.STRING,
                allowNull: false
            },
            date: {
                type: Sequelize.DATE,
                allowNull: false
            }
        },
        {
            timestamps: false
        }
    )
}