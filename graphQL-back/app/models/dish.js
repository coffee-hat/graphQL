export default (sequelize, Sequelize) => {
    return sequelize.define(
        "dish",
        {
            name : {
                type: Sequelize.STRING,
                allowNull: false
            },
            description : {
                type: Sequelize.STRING,
                allowNull: false
            },
            price : {
                type: Sequelize.FLOAT,
                allowNull: false
            },
            image_url : {
                type: Sequelize.STRING,
                allowNull: false
            },
            allergens: {
                type: Sequelize.STRING,
                allowNull: true
            }
        },
        {
            timestamps: false
        }
    )
}